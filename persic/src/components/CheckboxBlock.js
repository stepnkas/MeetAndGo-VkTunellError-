import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Checkbox } from '@vkontakte/vkui';

const CheckboxBlock = ({ label, onChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        borderRadius: '8px',
      }}
    >
      <Checkbox onChange={onChange}>
        {label}
      </Checkbox>
    </div>
  );
};

export default CheckboxBlock;