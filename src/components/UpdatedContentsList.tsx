import React from 'react';
import { DateTime } from 'luxon';

const contents = [
  { link: '', title: 'C++バイナリデータの扱い方', modifiedDatetime: DateTime.utc(2016, 12, 9) },
] as const;

const UpdatedContentsList: React.FC = () => {
  return (
    <>
      {contents.map((c, i) => (
        <dl key={i}>
          <dt>
            <a href={c.link}>{c.title}</a>（{c.modifiedDatetime.toFormat('yyyy年M月d日')}更新）
          </dt>
        </dl>
      ))}
    </>
  );
};
export default UpdatedContentsList;
