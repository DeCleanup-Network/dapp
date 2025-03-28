'use client'

const Login: React.FC = () => {
  return (
    <div className='flex h-[745px] flex-col bg-[#58b12f]'>


      {/* Main Content */}
      <div className='flex flex-col items-center '>
        {/* Heading */}
        <h2 className='mb-4 mt-4 max-w-full whitespace-normal p-2 text-center text-4xl font-bold md:font-extrabold font-nunito leading-3 sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl'>
          DECLEANUP REWARDS
        </h2>

        <hr className='my-4 w-full border-t-2 border-black' />

        {/* Subheading and Description */}
        <div className='flex flex-col items-center py-5 text-center'>
          <p className='mb-4 bg-[#FAFF00] font-nunito p-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl'>
            FIRST DAPP TO SELF-TOKENIZE ENVIRONMENTAL CLEANUP EFFORTS
          </p>
          <p
            className='mb-6 font-bebas text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'
            style={{ lineHeight: '1.2' }}
          >
            APPLY WITH YOUR CLEANUP RESULTS TO RECEIVE A DECLEANUP IMPACT
            PRODUCT, PROGRESS THROUGH LEVELS AND EARN POINTS, REDEEMABLE IN THE
            FUTURE
          </p>
        </div>

        <hr className='my-4 w-full border-t-2 border-black' />

        {/* Connect Wallet Button */}
        <div className='w-full px-4 mt-10'>
          <button
            className='w-full rounded bg-black py-3 h-[100px] md:text-7xl font-bold text-[#FAFF00] hover:bg-gray-800'
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
