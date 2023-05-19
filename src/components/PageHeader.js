const PageHeader = (props) => {
    const { pageName } = props;

    return (
        <div className="page-header" >
            <h2>{pageName}</h2>
        </div >
    )

}
export default PageHeader;