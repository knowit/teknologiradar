#!/bin/python3

import argparse
from pathlib import Path
import pandas as pd
import re

parser = argparse.ArgumentParser(description='Convert tech radar csv data to markdown files.')
parser.add_argument('csv', type=str, help='path to csv-file')
parser.add_argument('out', type=str, help='path to output dir for storing md-files')
args = parser.parse_args()

df = pd.read_csv(args.csv)
output_dir = Path(args.out)

df_dict = df.to_dict(orient="records")
output_dir.mkdir(parents=True, exist_ok=True)

for e in df_dict:
    s = f"---\ntitle: \"{e['name']}\"\nring: {e['ring'].lower() if e['ring'] != 'TEST' else 'assess'}\nquadrant: {e['quadrant'].lower()}\n---\n{e['description'] if e['description']==e['description'] else ''}"

    name = e['name'].replace("/", "-slash-")
    name = name.replace("*", "-star-")
    name = name.replace("#", "-hashtag-")
    name = name.replace("+", "-plus-")
    name = re.sub("[<>:\"\\|? ,.()';_~^`´{}\[\]&%$@!§]", "-", name)
    name = re.sub("--+", "-", name)
    name = re.sub("^-", "", name)
    name = re.sub("-$", "", name)

    out_file = output_dir / f"{name.lower()}.md" 
    with out_file.open("w+") as f:
        f.write(s)