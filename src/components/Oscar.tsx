// 里面有<Heading></Heading> 是children

type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
