import Image from 'next/image'
import BannerImg from '../static/banner.png'

const styles ={
    accentedButton :'bg-black text-white py-2 px-4 rounded-full',
    content : `flex items-center justify-center flex-1 m-10`,
    wrapper :'h-max-[10rem] flex flex items-center justify-center bg-[#FCC017] border-y border-black'
} 
 
const Banner = () => {
  return(
    <>
    <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className='space-y-5'>
            <h1 className='text-[6rem] max-w-xl font-mediumSerif'>Stay Curious.</h1>
            <h3 className='text-2xl'>Discover stories , thinking and experties from writers  on any topic</h3>
      
            <button className={styles.accentedButton}>Start Reading</button> 
      </div>

      <div>
      <Image src={BannerImg} 
        className='md:inline-flex object-contain flex-1'
        width={500}
        height={400}
      />
      </div>
    </div>
    </div>
    </>
  )
}
export default Banner