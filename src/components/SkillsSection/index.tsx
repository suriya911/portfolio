import React from "react";
import JavascriptLogo from "@images/icons/javascript-logo.svg";
import PythonLogo from "@images/icons/python-logo.svg";
import TypescriptLogo from "@images/icons/typescript-logo.svg";
import NodeJSLogo from "@images/icons/nodejs-logo.svg";
import ExpressJSLogo from "@images/icons/express-logo.svg";
import MongoDBLogo from "@images/icons/mongo-logo.svg";
import PostgresSQLLogo from "@images/icons/postgresql-logo.svg";
import GitLogo from "@images/icons/git-logo.svg";
import DockerLogo from "@images/icons/docker-logo.svg";
import HTMLLogo from "@images/icons/html-5-logo.svg";
import CSSLogo from "@images/icons/css-3-logo.svg";
import SASSLogo from "@images/icons/sass-logo.svg";
import ReactLogo from "@images/icons/react-logo.svg";
import NextJSLogo from "@images/icons/nextjs-logo.svg";
import GatsbyLogo from "@images/icons/gatsby-logo.svg";
import ReduxLogo from "@images/icons/redux-logo.svg";
import GraphQLLogo from "@images/icons/graphql-logo.svg";
import ApolloClientLogo from "@images/icons/apollo-client-logo.svg";
import MaterialUILogo from "@images/icons/material-logo.svg";
import AntDLogo from "@images/icons/ant-design-logo.svg";
import PulumiLogo from "@images/icons/pulumi-logo.svg";
import PackerLogo from "@images/icons/packer-logo.svg";
import GoLangLogo from "@images/icons/golang-logo.svg";
import JavaLogo from "@images/icons/java-logo.svg";
import FastAPILogo from "@images/icons/fastapi-logo.svg";
import RedisLogo from "@images/icons/redis-logo.svg";
import KafkaLogo from "@images/icons/kafka-logo.svg";
import MSSQLLogo from "@images/icons/mssql-logo.svg";
import BootstrapLogo from "@images/icons/bootstrap-logo.svg";
import TerraformLogo from "@images/icons/terraform-logo.svg";

import HarnessLogo from "@images/icons/harness-logo.svg";
import JFrogLogo from "@images/icons/jfrog-logo.svg";
import GCPLogo from "@images/icons/gcp-logo.svg";
import AWSLogo from "@images/icons/aws-logo.svg";
import GrafanaLogo from "@images/icons/grafana-logo.svg";
import DynatraceLogo from "@images/icons/dynatrace-logo.svg";
import RancherLogo from "@images/icons/rancher-logo.svg";
import SparkLogo from "@images/icons/spark-logo.svg";
import AirflowLogo from "@images/icons/airflow-logo.svg";
import HadoopLogo from "@images/icons/hadoop-logo.svg";
import PineconeLogo from "@images/icons/pinecone-logo.svg";
import NumpyLogo from "@images/icons/numpy-logo.svg";
import PandasLogo from "@images/icons/pandas-logo.svg";
import SciKitLearnLogo from "@images/icons/scikitlearn-logo.svg";
import PytorchLogo from "@images/icons/pytorch-logo.svg";

import { SKILLS } from "@/constants/menu";
import AppSection from "../AppSection";
import SkillsSubSection from "./SkillsSubSection";

const programmingSkills = [
  // {
  //   id: "golang",
  //   logo: GoLangLogo,
  //   name: "Go",
  //   url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // },
  {
    id: "python",
    logo: PythonLogo,
    name: "Python",
    url: "https://www.python.org/doc/",
  },
  {
    id: "javascript",
    logo: JavascriptLogo,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "java",
    logo: JavaLogo,
    name: "Java",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  }
];

const frontendSkills = [
  {
    id: "html",
    logo: HTMLLogo,
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "css",
    logo: CSSLogo,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  // {
  //   id: "sass",
  //   logo: SASSLogo,
  //   name: "SASS",
  //   url: "https://sass-lang.com/documentation/",
  // },
  {
    id: "bootstrap",
    logo: BootstrapLogo,
    name: "Bootstrap 4",
    url: "https://sass-lang.com/documentation/",
  },
  {
    id: "reactJS",
    logo: ReactLogo,
    name: "ReactJS",
    url: "https://reactjs.org/",
  },
  // {
  //   id: "reactNative",
  //   logo: ReactLogo,
  //   name: "React Native",
  //   url: "https://reactnative.dev/",
  // },
  { id: "redux", logo: ReduxLogo, name: "Redux", url: "https://redux.js.org/" },
  // {
  //   id: "materialUI",
  //   logo: MaterialUILogo,
  //   name: "Material UI",
  //   url: "https://mui.com/",
  // }
];

const backendSkills = [
  {
    id: "node",
    logo: NodeJSLogo,
    name: "NodeJS",
    url: "https://nodejs.org/en/docs/",
  },
  {
    id: "express",
    logo: ExpressJSLogo,
    name: "ExpressJS",
    url: "https://expressjs.com/en/api.html",
  },
  {
    id: "fastapi",
    logo: FastAPILogo,
    name: "FastAPI",
    url: "https://expressjs.com/en/api.html",
  },
  // {
  //   id: "redis",
  //   logo: RedisLogo,
  //   name: "Redis Stack",
  //   url: "https://expressjs.com/en/api.html",
  // },
  {
    id: "kafka",
    logo: KafkaLogo,
    name: "Apache Kafka",
    url: "https://expressjs.com/en/api.html",
  }
];

const databaseSkills = [
  {
    id: "mongoDB",
    logo: MongoDBLogo,
    name: "MongoDB",
    url: "https://docs.mongodb.com/",
  },
  {
    id: "postgresSQL",
    logo: PostgresSQLLogo,
    name: "PostgresSQL",
    url: "https://www.postgresql.org/docs/",
  },
  {
    id: "MSSQL",
    logo: MSSQLLogo,
    name: "MS SQL",
    url: "https://www.postgresql.org/docs/",
  },
];

const dataEngineeringSkills = [
  {
    id: "spark",
    logo: SparkLogo,
    name: "Apache Spark",
    url: "https://docs.docker.com/",
  },
  {
    id: "airflow",
    logo: AirflowLogo,
    name: "Airflow",
    url: "https://docs.docker.com/",
  },
  {
    id: "Hadoop",
    logo: HadoopLogo,
    name: "Hadoop",
    url: "https://docs.docker.com/",
  },
  {
    id: "pinecone",
    logo: PineconeLogo,
    name: "Pinecone",
    url: "https://docs.docker.com/",
  }
];

const machineLearningSkills = [
  {
    id: "numpy",
    logo: NumpyLogo,
    name: "Numpy",
    url: "https://docs.docker.com/",
  },
  {
    id: "pandas",
    logo: PandasLogo,
    name: "Pandas",
    url: "https://docs.docker.com/",
  },
  {
    id: "scikitlearn",
    logo: SciKitLearnLogo,
    name: "SciKit-Learn",
    url: "https://docs.docker.com/",
  },
  {
    id: "pytorch",
    logo: PythonLogo,
    name: "Pytorch",
    url: "https://docs.docker.com/",
  }
];

const monitoringSkills = [
  {
    id: "grafana",
    logo: GrafanaLogo,
    name: "Grafana",
    url: "https://docs.docker.com/",
  },
  // {
  //   id: "dynatrace",
  //   logo: DynatraceLogo,
  //   name: "Dynatrace",
  //   url: "https://docs.docker.com/",
  // },
];

const cloudSkills = [
  { id: "git", logo: GitLogo, name: "Git", url: "https://git-scm.com/doc" },
  {
    id: "docker",
    logo: DockerLogo,
    name: "Docker",
    url: "https://docs.docker.com/",
  },
  // {
  //   id: "packer",
  //   logo: PackerLogo,
  //   name: "Packer",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "terraform",
  //   logo: TerraformLogo,
  //   name: "Terraform",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "pulumi",
  //   logo: PulumiLogo,
  //   name: "Pulumi",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "harness",
  //   logo: HarnessLogo,
  //   name: "Harness",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "jfrog",
  //   logo: JFrogLogo,
  //   name: "JFrog",
  //   url: "https://docs.docker.com/",
  // },
  // {
  //   id: "GCP",
  //   logo: GCPLogo,
  //   name: "GCP",
  //   url: "https://docs.docker.com/",
  // },
  {
    id: "aws",
    logo: AWSLogo,
    name: "AWS",
    url: "https://aws.amazon.com/",
  }
  // {
  //   id: "rancher",
  //   logo: RancherLogo,
  //   name: "Rancher",
  //   url: "https://docs.docker.com/",
  // }
];

function SkillsSection() {
  return (
    <AppSection headerTxt={SKILLS}>
      <div className="flex lg:flex-row max-lg:flex-col-reverse flex-col sm:gap-12 gap-9 section-content-padding">
        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Programming Languages"} skills={programmingSkills} />
          <SkillsSubSection headerTxt={"CI/CD and Cloud"} skills={cloudSkills} />
          <SkillsSubSection headerTxt={"Data Engineering"} skills={dataEngineeringSkills} />
          <SkillsSubSection headerTxt={"Monitoring"} skills={monitoringSkills} />
        </div>

        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Backend"} skills={backendSkills} />
          <SkillsSubSection headerTxt={"Databases"} skills={databaseSkills} />
          <SkillsSubSection headerTxt={"Frontend"} skills={frontendSkills} />
          <SkillsSubSection headerTxt={"Machine Learning"} skills={machineLearningSkills} />
        </div>
      </div>
    </AppSection>
  );
}

export default SkillsSection;
