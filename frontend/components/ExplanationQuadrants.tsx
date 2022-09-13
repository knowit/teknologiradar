import { memo } from "react";
import styles from "./ExplanationQuadrants.module.css";
interface ExplanationQuadrantProps {
  title: string;
  content: string;
}

const ExplanationQuadrant = ({ title, content }: ExplanationQuadrantProps) => {
  return (
    <div>
      <h3 className={styles.quadrantHeading}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const ExplanationQuadrants = () => {
  return (
    <div className={styles.quadrantWrapper}>
      <ExplanationQuadrant
        title="Priorities"
        content="Lörem ipsum her sovbutik, de terramani antin. Rebelogi seheten. Reklejma itt. Ögonkramp lalig, dibel. Gigas rekoring pseudod dingar, gönde. Krympflation orar när mifungen. Prolösamma sed om än vir. Julgranssyndrom hagyll i reda misk. Pare seminde mikrorad lerat. Biovis märk-dna. "
      />

      <div className={styles.explanationQuadrants}>
        <div>
          <ExplanationQuadrant
            title="Keep"
            content="Lörem ipsum her sovbutik, de terramani antin. Rebelogi seheten. Reklejma itt. Ögonkramp lalig, dibel. Gigas rekoring pseudod dingar, gönde. Krympflation orar när mifungen. Prolösamma sed om än vir. Julgranssyndrom hagyll i reda misk. Pare seminde mikrorad lerat. Biovis märk-dna. "
          />
        </div>
        <div>
          <ExplanationQuadrant
            title="Adopt"
            content="Lörem ipsum her sovbutik, de terramani antin. Rebelogi seheten. Reklejma itt. Ögonkramp lalig, dibel. Gigas rekoring pseudod dingar, gönde. Krympflation orar när mifungen. Prolösamma sed om än vir. Julgranssyndrom hagyll i reda misk. Pare seminde mikrorad lerat. Biovis märk-dna. "
          />
        </div>
        <div>
          <ExplanationQuadrant
            title="Trial"
            content="Lörem ipsum her sovbutik, de terramani antin. Rebelogi seheten. Reklejma itt. Ögonkramp lalig, dibel. Gigas rekoring pseudod dingar, gönde. Krympflation orar när mifungen. Prolösamma sed om än vir. Julgranssyndrom hagyll i reda misk. Pare seminde mikrorad lerat. Biovis märk-dna. "
          />
        </div>
        <div>
          <ExplanationQuadrant
            title="Test"
            content="Lörem ipsum her sovbutik, de terramani antin. Rebelogi seheten. Reklejma itt. Ögonkramp lalig, dibel. Gigas rekoring pseudod dingar, gönde. Krympflation orar när mifungen. Prolösamma sed om än vir. Julgranssyndrom hagyll i reda misk. Pare seminde mikrorad lerat. Biovis märk-dna. "
          />
        </div>
      </div>

      <ExplanationQuadrant
        title="Hold-Phase out"
        content="Lörem ipsum her sovbutik, de terramani antin. Rebelogi seheten. Reklejma itt. Ögonkramp lalig, dibel. Gigas rekoring pseudod dingar, gönde. Krympflation orar när mifungen. Prolösamma sed om än vir. Julgranssyndrom hagyll i reda misk. Pare seminde mikrorad lerat. Biovis märk-dna. "
      />
    </div>
  );
};

export default memo(ExplanationQuadrants);
