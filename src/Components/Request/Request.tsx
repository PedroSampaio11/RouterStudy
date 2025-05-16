import styled from "styled-components";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
};
export const Request = () => {
  const [user, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch("https://jsonplaceholder.typicode.com/users");

      const res = await url.json();
      setUsers(res);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {user.map((u) => (
        <Li key={u.id}>{u.name}</Li>
      ))}
    </ul>
  );
};
const Li = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
`;
