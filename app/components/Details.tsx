import React from 'react';

export default function Details() {
  return (
    <div className='flex flex-col lg:flex-row bg-gray-100'>
      <img className="mx-auto lg:mx-0 lg:my-auto lg:py-5 lg:pl-10 lg:pr-5 lg:w-1/3 rounded-full" src="https://img.freepik.com/premium-vector/young-man-face-icon-line-art-style_768258-1670.jpg" alt="Image" />
      <div className='lg:w-1/2'>
        <div className='About py-10 px-4 lg:px-10'>
          <h1 className='text-3xl lg:text-5xl font-bold text-center lg:text-left py-6 lg:py-10'>Hi, there! I am Yash Ahlawat</h1>
          <p className='text-sm lg:text-md italic py-3 lg:py-6 lg:text-left'>
            As a fervent web engineer, my passion for technology is more than just a profession—its a relentless pursuit of innovation and growth. Now, Im ready to channel that passion into something greater: contributing my skills to empower businesses and fuel their success. With every project, I see an opportunity not only to make a difference but also to evolve personally and professionally. Join me on this exhilarating journey as we explore the dynamic landscape of technology, create impactful solutions, and pave the way for a brighter future together.
          </p>
        </div>
        <div className='timeline py-6 lg:py-10'>
          <ul className="timeline">
            <li>
              <div className="timeline-start">2020</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">HTML,CSS,Javascript</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2021</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">Cypress</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2022</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">ReactJs,typescript</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2023</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">Tailwindcss,Context API</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2024</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">NextJs,Gatsby</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
