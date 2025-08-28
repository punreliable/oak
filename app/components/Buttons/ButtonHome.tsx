'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading';

const ButtonHome = () => {
  const searchParams = useSearchParams(); // Use the hook
  const from = searchParams.get('from');
  return (
    <Suspense fallback={<Loading />}>
      <div className='col-md-12 my-4'>
        <a href={`/pokemon/${from}`} className={`nes-btn is-warning`}>
          Home
        </a>
      </div>
    </Suspense>
  );
};

export default ButtonHome;
