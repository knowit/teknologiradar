#!/bin/python3

import argparse
from pathlib import Path
import pandas as pd

parser = argparse.ArgumentParser(description='Convert tech radar csv data to markdown files.')
parser.add_argument('csv', type=str, help='path to csv-file')
parser.add_argument('out', type=str, help='path to output dir for storing md-files')
#TODO: add path to output dir
args = parser.parse_args()

df = pd.read_csv(args.csv)
output_dir = Path(args.out)

quadrants = ["Languages", "Tools", "Frameworks", "Methods"]

if not df.quadrant.isin(quadrants).all():
    print(f"Some quadrant values are not in {quadrants}")
    exit()

for e in quadrants:
    d = output_dir / e.lower() 
    d.mkdir(parents=True, exist_ok=True)

df_dict = df.to_dict(orient="records")

for e in df_dict:
    s = f"---\ntitle: \"{e['name']}\"\nring: {e['ring'].lower() if e['ring'] != 'TEST' else 'assess'}\nquadrant: {e['quadrant'].lower()}\n---{e['description'] if e['description']==e['description'] else ''}"
    if "/" in e["name"]:
        name = e["name"].replace("/", " slash ")
        e["name"] = name
    out_file = output_dir / e["quadrant"].lower() / f"{e['name']}.md" 
    with out_file.open("w+") as f:
        f.write(s)


