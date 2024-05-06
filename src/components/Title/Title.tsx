import React from 'react';
import styles from './title.module.css';

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return (
    <div>
      <h1 className={styles.title}>{content}</h1>
    </div>
  );
};

export default Title;
