import { forwardRef } from "react";

import PropTypes from "prop-types";

import { AddTodoWrapper, Button, Input } from "./style";

const AddTodo = forwardRef(function AddTodo(props, ref) {
  const { onAddClick } = props;
  return (
    <AddTodoWrapper>
      <Input ref={ref} />
      <Button onClick={onAddClick}>Add</Button>
    </AddTodoWrapper>
  );
});

AddTodo.propTypes = {
  onAddClick: PropTypes.func,
};

export default AddTodo;
