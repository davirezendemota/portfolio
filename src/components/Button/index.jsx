import { StyledButton } from "../../components/Button/StyledButton"

function Button({children}) {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export { Button }