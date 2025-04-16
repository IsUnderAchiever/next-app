import FormUi from './FormUi';
import {DataType} from "@/app/user/page";
import {Form} from "antd";
import {useEffect} from "react";

const Create = (
    props: {
        open: boolean;
        setOpen: (open: boolean) => void;
        currentValue?: DataType;
        addressOptions: {
            id: number,
            name: string
        }[];
        tagsOptions: {
            id: number,
            name: string
        }[];
    }
) => {
    const {open, setOpen, currentValue, addressOptions, tagsOptions} = props
    const [form] = Form.useForm();
    useEffect(() => {
        if (currentValue) {
            // 需要保证父组件中设置的值与子组件Select.Options的value保持一致(而非label)
            form.setFieldsValue({
                ...currentValue,
                address: currentValue.address.id,
                tags: currentValue.tags.map(item => item.id)
            })
        }
    }, [currentValue, form]);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <FormUi title="编辑"
                    open={open}
                    addressOptions={addressOptions}
                    tagsOptions={tagsOptions}
                    form={form}
                    onSubmit={() => {
                        console.log('提交编辑:', form.getFieldsValue());
                        // 请求成功
                        setOpen(false)
                    }}
                    onClose={handleClose}
            />
        </div>
    );
};

export default Create;
