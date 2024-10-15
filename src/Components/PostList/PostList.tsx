import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { handleFilterData, handleSetData } from "../../redux/filterSlice";
import { useFetch } from "../../api/useFetch";

interface Props {
  isErorr?: boolean;
  isLoading?: boolean;
}

const PostList = (props: Props) => {
  const { data, isErorr, isLoading } = useFetch();

  const filteredData = useAppSelector((state) => state.filter.filteredPosts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data.length !== 0) {
      dispatch(handleSetData(data));
    }
  }, [data, dispatch]);

  const input = useAppSelector((state) => state.input);
  useEffect(() => {
    dispatch(handleFilterData(input));
  }, [input, dispatch]);

  return (
    <Wrapper>
      {isLoading
        ? "Data is Loading. Please wait a few seconds..."
        : isErorr
        ? "An error occurred while loading data."
        : filteredData.length === 0
        ? "No posts found matching your search."
        : filteredData.map(({ id, userId, title, body }) => (
            <div key={id}>
              <div>UserId: {userId}</div>
              <div>Title: {title}</div>
              <div>Comment: {body}</div>
            </div>
          ))}
    </Wrapper>
  );
};

export default PostList;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
