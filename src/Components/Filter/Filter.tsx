import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleChange } from "../../redux/InputSlice";

interface Props {}

const Filter = (props: Props) => {
  const input = useAppSelector((state) => state.input);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <label>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(handleChange(e.target.value))
          }
        />
      </label>
    </Wrapper>
  );
};
export default Filter;

const Wrapper = styled.div`
  margin: 1rem 0;
`;
