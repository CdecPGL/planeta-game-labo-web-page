import React from 'react';
import { Link } from 'gatsby';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

type Item = {
  meta?: string;
  title: string;
  link?: string;
  contents?: readonly string[];
};

type ItemListProps = {
  items: readonly Item[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className='mb-4 space-y-2'>
      {items.map((i) => {
        return (
          <div className='p-5 border'>
            {i.meta && <p className='text-sm mb-1'>{i.meta}</p>}
            {i.link == null ? (
              <Heading>{i.title}</Heading>
            ) : (
              <Link to={i.link ?? ''}>
                <Heading>{i.title}</Heading>
              </Link>
            )}
            {i.contents && (
              <Paragraph>
                {i.contents.map((c, idx) =>
                  idx === (i.contents?.length ?? 0) - 1 ? (
                    <>{c}</>
                  ) : (
                    <>
                      {c}
                      <br />
                    </>
                  ),
                )}
              </Paragraph>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
