import './about.styles.scss';
import SubHeadTitle from '../../components/subHeadTitle/subHeadTitle.component';
import profileImg from '../../assets/western-film-set.jpg'

const About = () => {
  return (
    <div className='about-container'>
      <SubHeadTitle title={'Profile'} />
      <div className='about-img-container'>
        <img src={profileImg} alt="" />
      </div>
      <div className='about-text-container'>
        <p>My name is Oguntola Pelumi. I am a certified movie nerd, bringing to your computer screens my honest opinion on various movies and shows. I have been actively watching movies for over two decades and I have written credible reviews on various movies.This site serves as a platform to bring my desires to limelight. Enjoy your reading!!! Au revoir</p>
      </div>
    </div>
  )
}

export default About;