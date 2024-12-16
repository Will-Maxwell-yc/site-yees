import styled from "styled-components"

export const Wrapper = styled.div`
`

export const ProjectSection = styled.section`
    padding-bottom: 120px;
`

export const Container = styled.div`
    @media (min-width: 1200px) {
        max-width: 1350px;
        margin: 0 auto;
}
`

export const Singletab = styled.div`
`

export const TabLinks = styled.ul`
    border: 1px solid var(--cusborder);
    padding: 10px 10px;
    border-radius: 8px;
    max-width: 683px;
    margin: 0 auto 60px;
    display: flex;
    align-items: center;  
    display: flex;
    align-items: center;
    gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    margin: 0 auto 40px;
  }
`

export const Button = styled.button`
    border: none;
    background: transparent;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    color: var(--pra);
    padding: 16px 24px;
    border-radius: 5px;
`

export const NavLink = styled.li`
    &:not(:last-child) {
        border-right: 1px solid var(--cusborder);
    }

    &.active button {
        background: var(--base);
        color: var(--title);
    }
`

export const TabContents = styled.div`
    position: relative;
`

export const ProjectWrapone = styled.div`
    columns: 2;
    gap: 58px;
    padding: 40px;

    @media (max-width: 1199px) {
        gap: 40px;
    }

    @media (max-width: 991px) {
        gap: 30px; 
    }

    @media (max-width: 767px) {
        columns: 1;
    }
`