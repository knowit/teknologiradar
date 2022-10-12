// This is an automatically generated file.
// Please do not adjust it without adjusting the script.

export type Status = 'TEST' | 'KEEP' | 'ADOPT' | 'TRIAL' | 'HOLD';

export interface Item {
  name: string;
  status: Status;
  priority?: boolean;
}
export interface Group {
  name: string;
  id: string;
  items: Item[];
}
export interface Category {
  name: string;
  link: string;
  groups: Group[];
}

const categories: Record<string, Category> = {
  backend: {
    name: 'backend',
    link: 'backend',
    groups: [
      {
        name: 'languages',
        id: 'languages',
        items: [
          { name: 'Kotlin', status: 'ADOPT', priority: true },
          { name: 'Clojure', status: 'TEST', priority: false },
          { name: 'C#', status: 'KEEP', priority: false },
          { name: 'Python', status: 'KEEP', priority: true },
          { name: 'Java', status: 'KEEP', priority: false },
          { name: 'Ruby', status: 'KEEP', priority: false },
          { name: 'Rust', status: 'TRIAL', priority: true },
          { name: 'GraphQL', status: 'TRIAL', priority: false },
          { name: 'Golang', status: 'TRIAL', priority: true },
          { name: 'Scala', status: 'HOLD', priority: false },
        ],
      },
      {
        name: 'frameworks',
        id: 'frameworks',
        items: [
          { name: 'Mockk', status: 'ADOPT', priority: false },
          { name: 'ASP.NET Core', status: 'ADOPT', priority: false },
          { name: '.NET 5.0+', status: 'ADOPT', priority: false },
          { name: 'pytorch', status: 'TEST', priority: false },
          { name: 'Rockt', status: 'TEST', priority: false },
          { name: 'Actix', status: 'TEST', priority: false },
          { name: 'Exposed', status: 'TEST', priority: false },
          { name: 'Pandas', status: 'KEEP', priority: false },
          { name: 'Django', status: 'KEEP', priority: false },
          { name: 'Spring Boot', status: 'KEEP', priority: false },
          { name: 'Hibernate', status: 'KEEP', priority: false },
          { name: 'Quarkus', status: 'TRIAL', priority: false },
          { name: 'Micronaut', status: 'TRIAL', priority: true },
          { name: 'WebFlux', status: 'TRIAL', priority: false },
          { name: 'NodeJS', status: 'TRIAL', priority: false },
          { name: 'SQLAlchemy ORM', status: 'TRIAL', priority: false },
          { name: 'Koin', status: 'TRIAL', priority: false },
          { name: 'Ktorm', status: 'TRIAL', priority: false },
          { name: 'Ktor', status: 'TRIAL', priority: false },
          { name: 'Play2 Framework', status: 'HOLD', priority: false },
        ],
      },
      {
        name: 'tools',
        id: 'tools',
        items: [
          { name: 'SNS', status: 'ADOPT', priority: false },
          { name: 'SQS', status: 'ADOPT', priority: false },
          { name: 'Owasp security checking', status: 'ADOPT', priority: false },
          { name: 'Terraform', status: 'ADOPT', priority: true },
          { name: 'Redis', status: 'ADOPT', priority: false },
          { name: 'Kafka', status: 'ADOPT', priority: true },
          { name: 'GraalVM', status: 'TEST', priority: false },
          { name: 'AWS CDK', status: 'TEST', priority: false },
          { name: 'InfluxDB', status: 'TEST', priority: false },
          { name: 'EventStoreDB', status: 'TEST', priority: false },
          { name: 'DynamoDB', status: 'KEEP', priority: false },
          { name: 'MSSQL Server', status: 'KEEP', priority: false },
          { name: 'Flyway/Liquibase', status: 'KEEP', priority: false },
          { name: 'ELK-stack', status: 'KEEP', priority: false },
          { name: 'S3/simple storage', status: 'KEEP', priority: false },
          { name: 'PostgreSQL', status: 'KEEP', priority: false },
          { name: 'Kubernetes', status: 'KEEP', priority: false },
          { name: 'BigQuery', status: 'TRIAL', priority: false },
          { name: 'MongoDB', status: 'TRIAL', priority: false },
          { name: 'Snyk', status: 'TRIAL', priority: false },
          { name: 'Azure Pipelines', status: 'TRIAL', priority: false },
          { name: 'CosmosDB', status: 'TRIAL', priority: false },
          { name: 'Gitlab CI/CD', status: 'TRIAL', priority: false },
          { name: 'Github Actions', status: 'TRIAL', priority: false },
          { name: 'Kong', status: 'TRIAL', priority: false },
          { name: 'DocumentDB', status: 'TRIAL', priority: false },
          { name: 'MySql', status: 'HOLD', priority: false },
          { name: 'OracleDB', status: 'HOLD', priority: false },
          { name: 'Helm 2', status: 'HOLD', priority: false },
        ],
      },
      {
        name: 'methods',
        id: 'methods',
        items: [
          { name: 'Reactive architecture', status: 'ADOPT', priority: false },
          { name: 'DevOps', status: 'ADOPT', priority: false },
          { name: 'Eventdriven', status: 'ADOPT', priority: true },
          { name: 'IaC', status: 'ADOPT', priority: true },
          {
            name: 'Object-oriented programming',
            status: 'KEEP',
            priority: false,
          },
          { name: 'SCRUM', status: 'KEEP', priority: false },
          { name: 'Functional programming', status: 'KEEP', priority: false },
          { name: 'Kanban', status: 'KEEP', priority: false },
          { name: 'Microservices', status: 'KEEP', priority: false },
          { name: 'Service Mesh', status: 'TRIAL', priority: false },
          { name: 'OKR', status: 'TRIAL', priority: false },
          { name: 'Serverless', status: 'TRIAL', priority: false },
          { name: 'DevSecOps', status: 'TRIAL', priority: false },
        ],
      },
    ],
  },
  'ai-and-data': {
    name: 'ai-and-data',
    link: 'ai-and-data',
    groups: [
      {
        name: 'languages',
        id: 'languages',
        items: [
          { name: 'Python', status: 'KEEP', priority: true },
          { name: 'Kotlin', status: 'KEEP', priority: false },
          { name: 'Julia', status: 'TEST', priority: false },
          { name: 'R', status: 'TEST', priority: false },
          { name: 'SQL', status: 'KEEP', priority: false },
        ],
      },
      {
        name: 'tools',
        id: 'tools',
        items: [
          { name: 'AWS Sagemaker', status: 'ADOPT', priority: false },
          { name: 'Snowflake', status: 'ADOPT', priority: true },
          { name: 'Databricks', status: 'ADOPT', priority: false },
          {
            name: 'AWS Sagemaker Model Registry',
            status: 'ADOPT',
            priority: false,
          },
          { name: 'Pandas for Spark 3.0', status: 'ADOPT', priority: true },
          { name: 'EMR', status: 'KEEP', priority: false },
          { name: 'Managed Airflow', status: 'KEEP', priority: false },
          { name: 'BigQuery', status: 'KEEP', priority: true },
          { name: 'Apache Spark', status: 'KEEP', priority: true },
          { name: 'Jupyterhub', status: 'KEEP', priority: true },
          { name: 'Jupyter notebooks', status: 'KEEP', priority: true },
          { name: 'AWS Feature store', status: 'TEST', priority: false },
          { name: 'AWS MLOps', status: 'TEST', priority: false },
          { name: 'AWS Sagemaker Pipelines', status: 'TEST', priority: false },
          { name: 'AWS Sagemaker studio', status: 'TEST', priority: false },
          { name: 'AWS Sagemaker Autopilot', status: 'TEST', priority: false },
          { name: 'Snowpark', status: 'TEST', priority: false },
          { name: 'IBM AI Fairness 360', status: 'TEST', priority: false },
          { name: 'Vertex AI (Google)', status: 'TEST', priority: false },
          { name: 'Dataiku', status: 'TRIAL', priority: false },
          { name: 'Unity Catalog', status: 'TRIAL', priority: false },
          { name: 'BigQuery ML', status: 'TRIAL', priority: false },
        ],
      },
      {
        name: 'methods',
        id: 'methods',
        items: [
          { name: 'AutoML', status: 'TEST', priority: false },
          { name: 'GPT(-3)', status: 'TEST', priority: false },
          { name: 'Support Vector Machines', status: 'TRIAL', priority: false },
          { name: 'Data Mesh', status: 'TRIAL', priority: false },
          { name: 'ETL', status: 'KEEP', priority: true },
        ],
      },
      {
        name: 'frameworks',
        id: 'frameworks',
        items: [
          { name: 'DBT', status: 'ADOPT', priority: true },
          { name: 'Airflow', status: 'ADOPT', priority: false },
          { name: 'Great Expectations', status: 'ADOPT', priority: false },
          { name: 'Pytorch', status: 'KEEP', priority: false },
          { name: 'XGBoost', status: 'KEEP', priority: false },
          { name: 'Scikit-Learn', status: 'KEEP', priority: false },
          { name: 'Tensorflow', status: 'KEEP', priority: true },
          { name: 'Pandas', status: 'KEEP', priority: false },
          { name: 'Keras', status: 'KEEP', priority: false },
          { name: 'Prefect', status: 'TEST', priority: false },
          { name: 'Koalas', status: 'TEST', priority: false },
          { name: 'Dagster', status: 'TEST', priority: false },
          { name: 'DataHub', status: 'TEST', priority: false },
          { name: 'Spark on Kubernetes', status: 'TRIAL', priority: false },
          { name: 'Delta Live Tables', status: 'TRIAL', priority: true },
          { name: 'Nansen', status: 'TRIAL', priority: false },
        ],
      },
    ],
  },
};

export default categories;
