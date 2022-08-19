# teknologiradar
Frontend for Knowit teknologiradar

Kategoriene er hentet fra https://docs.google.com/spreadsheets/d/1UmmJh3Xzj_wDKrjuN3HRArPzFoaOlyQTP_SlkCfLTfU/edit#gid=0  
Data fra 2022 er her: https://docs.google.com/spreadsheets/d/1DGSFsPbbjRNZx7aKm8LuiVKB531cXOBI-hXieoIt0Ag/edit#gid=1741192413

## First time setup

```bash
npm install --prefix frontend-cdk && npm install --prefix frontend
```

## Build frontend

```bash
cd frontend && \
(npx aoe_technology_radar-buildRadar && \
npx aoe_technology_radar-generateJson && \
npx aoe_technology_radar-createStaticFiles); \
cd ..
```

## Deploy frontend to AWS

To deploy you must be logged into the aws cli (e.g., with `aws sso login`)

```bash
cd frontend-cdk; cdk deploy; cd ..
```