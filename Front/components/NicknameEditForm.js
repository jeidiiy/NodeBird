import React, { useMemo, useCallback } from 'react';
import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

const NicknameEditForm = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || '');
  const onSubmit = useCallback(() => {
    dispatch({ type: CHANGE_NICKNAME_REQUEST, data: nickname });
  }, [nickname]);

  // 스타일 useMemo로 성능 최적화
  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px',
    }),
    [],
  );

  return (
    <Form style={style}>
      <Input.Search
        addonBefore="닉네임"
        enterButton="수정"
        onChange={onChangeNickname}
        value={nickname}
        onSearch={onSubmit}
      />
    </Form>
  );
};

export default NicknameEditForm;
