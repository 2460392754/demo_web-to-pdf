import styles from './index.less';

type ITemp = {
  curHeight: number;
  list: {
    i: number;
    height: number;
  }[];
};

export default function IndexPage() {
  const A4Height = 1123;
  const list = [];
  let temp: ITemp = {
    curHeight: 0,
    list: [],
  };

  for (let i = 0; i < 30; i++) {
    const MIN = 100;
    const MAX = 300;
    const height = Math.floor(Math.random() * (MAX - MIN) + MIN);

    if (temp.curHeight + height > A4Height) {
      list.push(temp.list);
      temp.curHeight = 0;
      temp.list = [];
    }

    temp.curHeight += height;

    temp.list.push({
      i,
      height,
    });
  }

  return (
    <div className={styles.page}>
      {list.map((topicList, i) => (
        <div className={styles.a4Container} key={'a4Container' + i}>
          {topicList.map((topic, i) => (
            <div
              className={styles.topic}
              key={'topic' + i}
              style={{
                height: topic.height + 'px',
                lineHeight: topic.height + 'px',
              }}
            >
              <span> 索引: {topic.i} </span>
              <span> 高度: {topic.height}px</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
