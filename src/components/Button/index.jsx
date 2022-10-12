import { StyledButton } from "../../components/Button/StyledButton"

function Button({children, className, type}) {
    return (
        <>
            { type == "1" && (
                <StyledButton className={ className }>{children}</StyledButton>
            )}
        </>
    )
}

export { Button }