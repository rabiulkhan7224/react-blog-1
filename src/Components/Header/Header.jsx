import profile from '../../assets/profile.png'

function Header() {
    return (
        <div className='flex justify-between container mx-auto mb-8 border-b-2 border-gray-400 '><h1 className='text-5xl font-bold'>Knowledge Cafe</h1><div><img src={profile} alt="" /></div></div>
    )
}

export default Header