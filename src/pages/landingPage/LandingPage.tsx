import coffeebeans from '../../assets/coffeebeans.jpg';
import milkcoffee from '../../assets/milkcoffee.jpg';
import toast from '../../assets/toast.jpg';
import luchi from '../../assets/luchi.jpg';
import batora from '../../assets/batora.webp';

const LandingPage = () => {
  setInterval(() => {}, 4000);

  return (
    <div className='flex justify-center p-[3%] gap-[3%]'>
      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[24px]'>
          <div className=''>
            <img className='w-[560px] ' src={milkcoffee} alt='' />
          </div>
          <div>
            <img className='w-[560px]' src={coffeebeans} alt='' />
          </div>
        </div>
        <div>
          <img className='w-[560px]' src={batora} alt='' />
        </div>
      </div>
      <div>
        {' '}
        <div>
          <img className='w-[560px]' src={toast} alt='' />
        </div>
        <div>
          <img className='w-[560px]' src={luchi} alt='' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
