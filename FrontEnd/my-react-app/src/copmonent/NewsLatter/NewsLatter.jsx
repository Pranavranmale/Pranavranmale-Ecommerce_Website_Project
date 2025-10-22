import './NewsLatter.css';
const NewsLatter = () => {
  return (
    <div className='newslatter'>
      <h1>Get Exclusive Offer on your Email</h1>
      <p>Subscribe to your News latter and stay Updated</p>
      <div>
        <input type="Email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default NewsLatter;