import { useState } from "react";

type Props = {
    value: number;
    onChange: (value: number) => boolean;
};

export const InputNumber = ({ value, onChange }: Props) => {
    const [localValue, setLocalValue] = useState(value); // ✅ ローカル状態で値を管理

    const onChangeHandler = (inputValue: string) => {
        // ✅ 数字以外を削除し、全角を半角に変換
        const convertedValue = inputValue
            .replace(/[^\d.]/g, '') // 半角数字と小数点以外を削除
            .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0)); // 全角数字を半角に変換

        const numberValue = Number(convertedValue);
        if (!isNaN(numberValue)) {
            if (onChange(numberValue))
            {
                setLocalValue(numberValue); // ✅ ローカル状態を更新
            }
        }
    };

    return (
        <input
            type="text"
            inputMode="numeric"
            value={localValue}
            onChange={(e) => onChangeHandler(e.target.value)}
        />
    );
};
