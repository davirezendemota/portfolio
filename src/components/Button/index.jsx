import { StyledButton } from "../../components/Button/StyledButton"

function Button({children, link}) {
    return (
        <StyledButton onClick={() => {location.href=link}}>
            {children}
        </StyledButton>
    )
}

export { Button }