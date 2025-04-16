import FormUi from './FormUi';
import {Form} from "antd";
import {useEffect} from "react";

const Create = (
    props: {
        open: boolean;
        setOpen: (open: boolean) => void;
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
    const {open, setOpen, addressOptions, tagsOptions} = props
    const [form] = Form.useForm();
    useEffect(() => {
        // 当展开抽屉时重置表单
        if (open && form) {
            form.resetFields();
        }
    }, [open, form]);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <FormUi title="新增"
                    open={open}
                    form={form}
                    addressOptions={addressOptions}
                    tagsOptions={tagsOptions}
                    onSubmit={() => {
                        console.log('新增:', form.getFieldsValue())
                        // 请求成功
                        setOpen(false)
                    }}
                    onClose={handleClose}
            />
        </div>
    );
};

export default Create;
