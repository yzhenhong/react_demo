interface Props {
  listData: Array<Object>;
}

function DynamicList({ listData }: Props) {
  // console.log('dynamic-info', listData)
  return (
    <div className="dynamic-list">
      <div>dynamic-list</div>
    </div>
  );

}

export default DynamicList;