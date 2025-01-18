import Link from 'next/link';
import getCurrentYear from '../../utilities/getCurrentYear';

const Footer = () => {
  const year = getCurrentYear();

  return (
    <footer className='page-footer fixed-bottom gameboy text-center'>
      <div className='row mb-3'>
        <div className='col-md-12 footer-text'>
          <ul className='list-unstyled d-flex justify-content-center mb-0 py-4'>
            <li>
              <a href='http://like.comicui.com' target='_blank' className='icons-sm fb-ic'>
                <i className='fab fa-facebook-f white-text fa-lg'> </i>
              </a>
            </li>
            <li>
              <a href='http://code.comicui.com/' target='_blank' className='icons-sm github-ic'>
                <i className='fab fa-github white-text fa-lg'> </i>
              </a>
            </li>
            <li>
              <a href='http://bird.comicui.com' target='_blank' className='icons-sm tw-ic'>
                <i className='fab fa-twitter white-text fa-lg'> </i>
              </a>
            </li>
            <li>
              <a href='http://view.comicui.com' target='_blank' className='icons-sm yt-ic'>
                <i className='fab fa-youtube white-text fa-lg'> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-md-12 footer-text'>
          &copy;&nbsp;{year}&nbsp;
          <Link href='http://ComicUI.com' target='_blank'>
            ComicUI.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
