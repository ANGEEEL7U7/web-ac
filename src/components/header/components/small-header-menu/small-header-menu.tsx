import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { ActionMenu } from '../../header.hooks';
const SmallHeaderMenu = () => {
    const [menuStatus, toggle] = ActionMenu();

    return (
        <div className='flex flex-col'>
            <div className="flex  h-full w-full">
                <button className='button-icon transition-all' onClick={toggle}>
                    <span
                        className={`inline-flex transition-transform duration-300 ${menuStatus ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
                        <MenuTwoToneIcon />
                    </span>
                    <span
                        className={`absolute inline-flex transition-transform duration-300 ${menuStatus ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}>
                        <CloseTwoToneIcon />
                    </span>
                </button>
            </div>
            <div className={`${menuStatus ? 'h-100' : 'h-0'} overflow-auto transition-[height] duration-400`}>
                <div className={`duration-500 transition-opacity ${menuStatus ? 'opacity-100' : 'opacity-0'}`}>
                    <div >
                        <span>us at enim semper dapibus ac sed neque. Nunc interdum suscipit purus ac pellentesque. Aenean suscipit sagittis euismod. Ut blandit, elit quis efficitur fringilla, sapien elit auctor sapien, vel ultricies diam lacus at augue. Praesent pretium eros nec dolor tempor gravida. Integer volutpat augue at urna blandit, ac bibendum ligula ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent accumsan dignissim urna, vel ultrices purus condimentum et. Vestibulum cursus tellus eget auctor condimentum. Quisque molestie rhoncus est eget euismod. Donec fermentum quam at felis ultricies, vitae tincidunt metus laoreet. Maecenas id placerat elit. Nullam blandit tempus nunc ut rhoncus. Aenean vitae massa vitae massa lobortis porta vitae sit amet diam. Donec eget ipsum sed turpis facilisis tincidunt. Praesent consequat viverra ligula, id vestibulum sem rhoncus aliquet. Curabitur vulputate sodales tortor. Aenean nunc orci, efficitur vel elit a, viverra faucibus leo. Suspendisse potenti. Quisque nec ultrices neque. Ut hendrerit tempus mi sit amet accumsan. Mauris et mollis augue, sit amet faucibus odio. Morbi eu elit et libero elementum rutrum quis non massa. Phasellus vestibulum risus id sem consequat dictum. Morbi rhoncus in odio at laoreet. Curabitur rhoncus ut est non vulputate. Pellentesque mollis ac lectus ornare tincidunt. Suspendisse sagittis erat eu leo ullamcorper, a dictum diam iaculis. Curabitur vel lacus vitae nisl gravida tincidunt sit amet eu nulla. Vestibulum consectetur felis sit amet enim pulvinar, in consequat urna cursus. Nullam sed turpis id nibh finibus suscipit at eget orci. Aenean eget aliquam massa. Morbi condimentum, libero quis tristique iaculis, enim tellus tincidunt ante, quis convallis quam sapien nec lectus. Cras mattis sapien nec nunc suscipit, ut tincidunt magna iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed dolor libero. Aliquam nec purus id magna porttitor porta. Maecenas enim ipsum, viverra a leo maximus, volutpat molestie dui. In sagittis dui vitae gravida sollicitudin. Proin ac iaculis ex. Pellentesque quis elit non nunc gravida placerat nec et sem. Integer lacinia gravida purus, eget posuere neque gravida sit amet. Sed vulputate ornare tellus semper rhoncus. Integer nisl augue, sagittis sed nisi sit amet, maximus convallis arcu. Pellentesque congue turpis ac magna semper faucibus. Quisque eget eros neque. Sed imperdiet, augue at venenatis maximus, mi felis faucibus dui, id ornare massa risus commodo magna. Morbi a suscipit eros. Suspendisse potenti. Quisque rhoncus nisi at ligula dapibus, ac suscipit lorem eleifend. Curabitur a sodales erat. Sed vitae ipsum consequat, interdum elit eget, bibendum elit. Maecenas in eros tellus. Maecenas eget orci velit. In mauris mi, semper vel ante quis, maximus consectetur purus. Donec in lacus pellentesque, sollicitudin justo in, fermentum massa. Aliquam rutrum elit sed dui vehicula, eu consequat nisi tempor. Maecenas at dui elit. Cras et posuere risus. Vestibulum ullamcorper convallis lorem in semper. Phasellus ut turpis non ipsum rutrum consequat eget ac enim. Integer elit dui, ullamcorper a vestibulum in, porta et orci. Fusce eu suscipit quam, sed convallis erat. Praesent convallis nisl est, sit amet facilisis sapien vestibulum vitae. Aenean a facilisis diam. Integer tincidunt vulputate nulla in bibendum. Donec ac sapien eu mi vehicula fermentum. Cras eu lorem eget tortor egestas dictum eu non arcu. Pellentesque mollis in dolor at vulputate. Etiam congue mauris lacus, sed ullamcorper ante tempus non. Sed venenatis mollis tortor quis volutpat. Etiam congue bibendum nibh in tempor. Vestibulum ac pharetra quam. Mauris faucibus consequat sem, ut egestas metus pharetra vitae. Etiam vel odio et neque mollis rutrum sed ac dolor. Phasellus aliquam ligula non tincidunt bibendum. Cras ut erat id odio pretium interdum. Aliquam a nisi sit amet</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallHeaderMenu;