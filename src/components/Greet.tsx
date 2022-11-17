// number & boolean

type GreetProps = {
  name: string;
  messageCount?: number; //optional
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  //if messageCount is passed in, use that value; if not, use 0
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
