const Header = ({text, level}) => {

    const Tag = `h${level}`

    return (
        <Tag>{text}</Tag>
    )
}

export default Header;
