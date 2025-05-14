import { CustomComponentType } from "@/utils/entities";
import Button from "../Button";
import { formatClassName } from "@/utils/helpers/formatClassName";

interface InputFieldInterface {
    icon?: CustomComponentType;
    label?: string;
    placeholder?: string;
    collapseBreakpoint?: 'large' | 'medium';
    withButton?: boolean;
}

const InputField = ({
    icon,
    label,
    placeholder,
    collapseBreakpoint = 'medium',
    withButton = false
}: InputFieldInterface) => {
    const Icon = icon;

    return withButton ? (
        <div 
            className={formatClassName(`
                flex justify-between medium:rounded-3xl flex-col gap-5 max-w-[420px]
                ${collapseBreakpoint === 'medium' ? 'medium:bg-white medium:gap-0 medium:flex-row' : ''}
                ${collapseBreakpoint === 'large' ? 'large:bg-white large:gap-0 large:flex-row' : ''}
            `)}
        >
            <input 
                type="text"
                placeholder={placeholder ?? ''} 
                className={formatClassName(`
                    outline-none text-background bg-white px-5 py-3 rounded-full min-w-0
                    ${collapseBreakpoint === 'medium' ? 'medium:py-0 medium:bg-transparent medium:pl-5' : ''}
                    ${collapseBreakpoint === 'large' ? 'large:py-0 large:bg-transparent large:pl-5' : ''}
                `)}
            />
            <Button 
                onClick={() => {}}
                icon={icon}
                variant="secondary"
                className={formatClassName(`
                    text-default
                    ${collapseBreakpoint === 'medium' ? 'medium:px-[50px]' : ''}
                    ${collapseBreakpoint === 'large' ? 'large:px-[50px]' : ''}
                `)}
            >
                {label ?? ''}
            </Button>
        </div>
    ) : (
        <div className="flex items-center gap-3 bg-white rounded-[20px] px-5 py-3">
            {Icon && <Icon className="h-5 w-5 text-captions-label" />}
            <input type="text" placeholder={placeholder} className="outline-none text-background w-full"/>
        </div>
    );
};

export default InputField;