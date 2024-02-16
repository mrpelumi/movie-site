import './subHeadTitle.styles.scss';

const SubHeadTitle = ({title}) => {
  return (
    <div className='subhead-title-container'>
        <h3>{title}</h3>
        <hr />
    </div>
  )
}

export default SubHeadTitle;