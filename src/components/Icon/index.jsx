/* eslint-disable max-len */
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Menu = (props) => {
  return (
    <div id={props.id} className={cn(props.size, 'menu', 'ui-icon')}>
      <svg className={props.face} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14H24.5C25.3284 14 26 13.3284 26 12.5C26 11.6716 25.3284 11 24.5 11H7.5Z" fill="black"/>
        <path className={props.face} d="M7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21H16.5C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18H7.5Z" fill="black"/>
      </svg>
    </div>
  );
};

const LivingRoom = (props) => {
  return (
    <div id={props.id} className={cn(props.size, 'living-room', 'ui-icon')}>
<svg className={props.face}  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={props.face} fillRule="evenodd" clipRule="evenodd" d="M25.333 12.722V8a2.667 2.667 0 0 0-2.666-2.667H9.333A2.667 2.667 0 0 0 6.667 8v4.722a4.001 4.001 0 0 0-3.334 3.945V22a4.001 4.001 0 0 0 3.334 3.945v1.388c0 .369.298.667.666.667H10a.667.667 0 0 0 .667-.667V26h10.666v1.333c0 .369.299.667.667.667h2.667a.667.667 0 0 0 .666-.667v-1.388A4.001 4.001 0 0 0 28.667 22v-5.333a4.001 4.001 0 0 0-3.334-3.945Zm-2.666-5.389H9.333A.667.667 0 0 0 8.667 8v4.894a4.001 4.001 0 0 1 2.666 3.773v1.689A31.357 31.357 0 0 1 16 18c1.73 0 3.315.152 4.667.356v-1.69a4.002 4.002 0 0 1 2.666-3.772V8a.667.667 0 0 0-.666-.667Zm4 9.334a2 2 0 0 0-4 0v4.106a29.48 29.48 0 0 0-2-.393A29.445 29.445 0 0 0 16 20c-1.745 0-3.337.166-4.667.38-.758.123-1.432.26-2 .393v-4.106a2 2 0 1 0-4 0V22a2 2 0 0 0 1.998 2h17.336a2 2 0 0 0 2-2v-5.333Z"/></svg>
    </div>
  );
};

const Kitchen = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "kitchen", "ui-icon")}>
      <svg
         viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.face}
      >
        <g clipPath="url(#a)">
          <path
            className={props.face}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.167 6.617v-.95a2.5 2.5 0 0 1 2.5-2.5h2.666a2.5 2.5 0 0 1 2.5 2.5v.95h1.417c2.653 0 4.077 1.457 4.304 3.5h1.82c.684 0 1.335.263 1.833.74a2.507 2.507 0 0 1 0 3.66 2.638 2.638 0 0 1-1.832.74H23.57v7.165a2.464 2.464 0 0 1-2.461 2.46H6.89a2.464 2.464 0 0 1-2.46-2.46v-7.164H2.625C1.2 15.258 0 14.105 0 12.688c0-1.42 1.202-2.57 2.625-2.57h1.82c.227-2.04 1.65-3.5 4.305-3.5h1.417Zm6.166 0v-.95a1 1 0 0 0-1-1h-2.666a1 1 0 0 0-1 1v.95h4.666Zm2.917 1.64H8.75c-1.734 0-2.466.762-2.652 1.86H21.9c-.232-1.366-1.248-1.86-2.65-1.86Zm-17.61 4.43c0 .496.46.93.985.93H4.43v-1.86H2.625c-.524 0-.984.435-.984.93ZM21.11 23.242c.452 0 .82-.368.82-.82V11.758H6.07v10.664c0 .452.368.82.82.82H21.11Zm2.46-9.625h1.806c.524 0 .984-.434.984-.93 0-.495-.46-.93-.985-.93H23.57v1.86Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path className={props.face} d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const Bedroom = (props) => {
  return (
    <div id={props.id} className={cn(props.size, 'bedroom', 'ui-icon')}>
      <svg className={props.face}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M21.147 13.377 17.304.502A.703.703 0 0 0 16.63 0H7.453a.703.703 0 0 0-.674.502L2.936 13.377a.704.704 0 0 0 .673.904h6.723v6.3H7.57a.703.703 0 0 0-.704.703v2.013c0 .388.315.703.704.703h8.943a.703.703 0 0 0 .703-.703v-2.013a.703.703 0 0 0-.703-.703h-2.762v-6.3h2.063v3.545a.703.703 0 0 0 .155 1.389h1.096a.703.703 0 0 0 .155-1.389v-3.545h3.254a.704.704 0 0 0 .673-.904Zm-16.594-.502L7.977 1.406h8.13l3.423 11.47H4.553Zm11.257 9.719H8.273v-.607h7.537v.607Zm-4.072-2.013v-6.3h.607v6.3h-.607Z"/>
      </svg>
    </div>
  );
};

const Bathroom = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "bathroom", "ui-icon")}>
      <svg className={props.face}  viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M25.242 14.1463H10.2129C10.1632 13.7739 9.84623 13.4864 9.46162 13.4864H5.35562C4.971 13.4864 4.65402 13.7739 4.60431 14.1463H3.08504V2.87847C3.08504 2.13128 3.69061 1.52343 4.43501 1.52343C5.01244 1.52343 5.52588 1.89195 5.7122 2.43957L5.98621 3.24836C4.64554 4.01378 3.94842 5.62989 4.39829 7.17968L4.62371 7.95643C4.72943 8.35094 5.17544 8.59708 5.56458 8.4747L10.6538 6.9863C10.847 6.92978 11.0099 6.79852 11.1068 6.62139C11.2036 6.44432 11.2264 6.23581 11.17 6.04188L10.9446 5.26513C10.4888 3.69493 9.00327 2.70191 7.44033 2.8087L7.1488 1.94816C6.7523 0.782891 5.66172 0 4.43501 0C2.85373 0 1.5673 1.29126 1.5673 2.87847V14.1463H0.759879C0.340783 14.1463 0.00100708 14.4873 0.00100708 14.908V17.4233C0.00100708 17.773 0.235616 18.0675 0.555485 18.1571V20.3512C0.555485 22.1235 1.67485 23.6381 3.24114 24.2208L2.84815 24.8188C2.6173 25.1699 2.71388 25.6424 3.06371 25.8741C3.19244 25.9593 3.33742 26 3.48088 26C3.72737 26 3.96914 25.8796 4.11498 25.6576L4.89127 24.4765H21.1106L21.8869 25.6576C22.0328 25.8796 22.2746 26 22.521 26C22.6644 26 22.8096 25.9592 22.9382 25.8741C23.288 25.6424 23.3846 25.1699 23.1538 24.8188L22.7608 24.2208C24.3271 23.6381 25.4464 22.1235 25.4464 20.3512V18.1571C25.7663 18.0675 26.0009 17.773 26.0009 17.4233V14.908C26.0009 14.4873 25.6611 14.1463 25.242 14.1463V14.1463ZM9.48742 5.69129L9.50062 5.73674L5.86866 6.79897L5.85545 6.75352C5.56367 5.74841 6.14099 4.69247 7.14235 4.39962C7.3183 4.34813 7.49588 4.3236 7.67062 4.3236C8.48997 4.3236 9.24697 4.86284 9.48742 5.69129V5.69129ZM6.11449 15.0099H8.70275V19.9339H6.11449V15.0099ZM24.4832 16.9045C24.1479 17.1436 23.9287 17.5365 23.9287 17.9799V20.3512C23.9287 21.7859 22.7658 22.9531 21.3366 22.9531H4.66535C3.23606 22.9531 2.07323 21.7859 2.07323 20.3512V17.9799C2.07323 17.5366 1.85406 17.1436 1.51875 16.9045V15.6697H4.59679V20.6956C4.59679 21.1163 4.93657 21.4573 5.35567 21.4573H9.46167C9.88077 21.4573 10.2205 21.1163 10.2205 20.6956V15.6697H24.4832V16.9045H24.4832Z"/>
      </svg>
    </div>
  );
};

const Thermostat = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "thermostat", "ui-icon")}>
      <svg viewBox="0 0 24 24" className={props.face} xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} fillRule="evenodd" clipRule="evenodd" d="M9 4a3 3 0 1 1 6 0v10a5 5 0 1 1-6 0V4Zm2 10.999-.799.6A2.992 2.992 0 0 0 9 18h6c0-.98-.468-1.85-1.201-2.401l-.799-.6V13h-2v1.999ZM13 10v2h-2v-2h2Zm0-1V7h-2v2h2Zm0-5v2h-2V4a1 1 0 1 1 2 0Z" fillOpacity=".6"/>
      </svg>
    </div>
  );
};

const Leaves = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "leaves", "ui-icon")}>
      <svg className={props.face} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="m24.745 6.393-.665-1.715-1.167 1.424s-2.601 3.173-5.985 3.663c-.49.07-.991.152-1.528.268a10.5 10.5 0 0 0-3.395-7.548l-1.283-1.318-.444 1.761A7.525 7.525 0 0 1 7.49 6.802a10.162 10.162 0 0 0-4.457 4.806 7 7 0 0 0 0 5.379 4.935 4.935 0 0 0 2.579 2.625l.14.058a7.827 7.827 0 0 0 .14 1.808h-.829a9.52 9.52 0 0 1-2.916-.396L1.878 21l-.735 1.995.292.093c1.178.367 2.407.544 3.64.525.537 0 1.085 0 1.633-.093.248.423.546.815.887 1.167a6.65 6.65 0 0 0 4.527 1.773h.291c2.667-.065 5.24-.99 7.339-2.637l.233-.175c2.182-1.715 8.75-6.86 4.76-17.255ZM6.16 17.512a2.765 2.765 0 0 1-1.167-1.4 4.877 4.877 0 0 1 .07-3.757A8.027 8.027 0 0 1 8.61 8.61a8.586 8.586 0 0 0 2.963-3.395 7.688 7.688 0 0 1 1.645 5.413 11.668 11.668 0 0 0-4.515 2.707 10.034 10.034 0 0 0-2.543 4.177Zm13.545-1.167.198-.222-1.551-1.446-.199.221a19.903 19.903 0 0 1-10.126 6.335 5.436 5.436 0 0 1-.082-1.89 7.77 7.77 0 0 1 2.275-4.503 11.97 11.97 0 0 1 7-2.975 12.191 12.191 0 0 0 6.055-3.092c.395 1.297.592 2.646.583 4.002-.003.45-.038.897-.105 1.342a10.628 10.628 0 0 1-2.683 5.658 16.882 16.882 0 0 1-2.333 2.158l-.292.175c-3.033 2.404-7.49 2.882-9.333 1.015a22.26 22.26 0 0 0 10.593-6.848v.07Z"/>
        <path className={props.face} d="M20.778 15.108c.327-.396.665-.805.992-1.236l.175-.234-1.68-1.295-.175.234c-.315.408-.63.793-.945 1.166l-.187.222 1.634 1.365.186-.222Z"/>
      </svg>
    </div>
  );
};

const Humidity = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "humidity", "ui-icon")}>
      <svg className={props.face} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M8.513 13.003a.834.834 0 0 0-.841-.826.834.834 0 0 0-.842.826c0 2.66 2.06 4.684 4.768 4.684.465 0 .842-.37.842-.827a.834.834 0 0 0-.841-.826c-1.78 0-3.086-1.283-3.086-3.03Z" fillOpacity=".6"/>
        <path className={props.face} fillRule="evenodd" clipRule="evenodd" d="M18.364 19.41a8.73 8.73 0 0 0 0-12.501l-5.769-5.667a.852.852 0 0 0-1.19 0L5.636 6.91a8.73 8.73 0 0 0 0 12.502c3.515 3.452 9.213 3.452 12.728 0Zm-1.19-11.332a7.097 7.097 0 0 1 0 10.164c-2.857 2.807-7.49 2.807-10.348 0a7.097 7.097 0 0 1 0-10.164L12 2.995l5.174 5.083Z" fillOpacity=".6"/>
      </svg>
    </div>
  );
};

const Silent = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "silent", "ui-icon")}>
      <svg className={props.face} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M20 36.667c1.833 0 3.333-1.5 3.333-3.334h-6.666c0 1.834 1.5 3.334 3.333 3.334Zm0-25.834c4.15 0 6.667 3.367 6.667 7.5v.167L30 21.833v-3.5c0-5.116-2.717-9.4-7.5-10.533V6.667c0-1.384-1.117-2.5-2.5-2.5a2.497 2.497 0 0 0-2.5 2.5V7.8c-.4.1-.783.25-1.15.383l2.733 2.734c.3-.034.6-.084.917-.084ZM9.017 5.583l-2.35 2.35 4.683 4.684c-.867 1.666-1.35 3.616-1.35 5.716v8.334L6.667 30v1.667H30.4l2.9 2.9 2.35-2.35L9.017 5.583Zm17.65 22.75H13.333v-10c0-1.133.2-2.2.567-3.166l12.767 12.766v.4Z" fillOpacity=".6"/>
        </svg>
    </div>
  );
};

const CoolAir = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "cool-air", "ui-icon")}>
      <svg viewBox="0 0 40 40" className={props.face} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M36.667 18.333h-6.95l5.4-5.4-2.35-2.366L25 18.333h-3.333V15l7.766-7.767-2.366-2.35-5.4 5.4v-6.95h-3.334v6.95l-5.4-5.4-2.366 2.35L18.333 15v3.333H15l-7.767-7.766-2.35 2.366 5.4 5.4h-6.95v3.334h6.95l-5.4 5.4 2.35 2.366L15 21.667h3.333V25l-7.766 7.767 2.366 2.35 5.4-5.4v6.95h3.334v-6.95l5.4 5.4 2.366-2.35L21.667 25v-3.333H25l7.767 7.766 2.35-2.366-5.4-5.4h6.95v-3.334Z"/>
      </svg>
    </div>
  );
};

const Settings = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "settings", "ui-icon")}>
      <svg className={props.face} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M6 16C4.17526 16.0009 2.58119 14.7668 2.125 13H0V11H2.126C2.64564 8.98744 4.62012 7.70825 6.66928 8.05656C8.71845 8.40487 10.1594 10.2646 9.98486 12.3358C9.81035 14.407 8.07856 15.9995 6 16ZM6 10C4.9074 10.0011 4.01789 10.8788 4.00223 11.9713C3.98658 13.0638 4.85057 13.9667 5.94269 13.9991C7.03481 14.0315 7.95083 13.1815 8 12.09V12.49V12C8 10.8954 7.10457 10 6 10ZM20 13H11V11H20V13ZM11 8C9.17563 8.00046 7.58209 6.76644 7.126 5H0V3H7.126C7.64564 0.987443 9.62012 -0.291754 11.6693 0.0565595C13.7184 0.404872 15.1594 2.26461 14.9849 4.33583C14.8103 6.40705 13.0786 7.99947 11 8ZM11 2C9.9074 2.0011 9.01789 2.87884 9.00223 3.97134C8.98658 5.06383 9.85057 5.9667 10.9427 5.99912C12.0348 6.03153 12.9508 5.18149 13 4.09V4.49V4C13 2.89543 12.1046 2 11 2ZM20 5H16V3H20V5Z" fill="#00D2DF"/>
      </svg>
    </div>
  );
};

const BarChart = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "bar-chart", "ui-icon")}>
      <svg className={props.face} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={props.face} d="M20.6667 19H0.666672V9C0.666672 7.89543 1.5621 7 2.66667 7H6.66667V2C6.66667 0.89543 7.5621 0 8.66667 0H12.6667C13.7712 0 14.6667 0.89543 14.6667 2V5H18.6667C19.7712 5 20.6667 5.89543 20.6667 7V19ZM14.6667 7V17H18.6667V7H14.6667ZM8.66667 2V17H12.6667V2H8.66667ZM2.66667 9V17H6.66667V9H2.66667Z"/>
      </svg>
    </div>
  );
};

const Bulb = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "bulb", "ui-icon")}>
    <svg className={props.face} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={props.face} d="M10.3333 20H4.33334V18H10.3333V20ZM10.3333 17H4.33334L4.11034 15C3.99038 14.3385 3.79198 13.6936 3.51934 13.079C3.16534 12.579 2.79634 12.152 2.43934 11.735C1.12746 10.5053 0.367995 8.79777 0.333344 7C0.333344 3.13401 3.46735 0 7.33334 0C11.1993 0 14.3333 3.13401 14.3333 7C14.2927 8.7868 13.539 10.4831 12.2403 11.711L12.2233 11.731C11.8673 12.148 11.4993 12.58 11.1523 13.075C10.88 13.6912 10.6809 14.3373 10.5593 15L10.3333 17ZM7.33334 2C4.57329 2.00331 2.33665 4.23995 2.33334 7C2.33334 8.544 2.97734 9.293 3.95134 10.428C4.32134 10.86 4.74134 11.348 5.15134 11.919C5.64891 12.8858 5.98886 13.9259 6.15834 15H8.50934C8.6832 13.929 9.02259 12.8916 9.51534 11.925C9.91534 11.354 10.3343 10.863 10.7033 10.431L10.7183 10.413C11.6903 9.273 12.3333 8.52 12.3333 7C12.33 4.23995 10.0934 2.00331 7.33334 2Z"/>
    </svg>
    </div>
  );
};

const SettingGear = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "setting-gear", "ui-icon")}>
    <svg className={props.face} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={props.face} d="M11.82 20H8.18C7.71011 20 7.30355 19.673 7.20299 19.214L6.79599 17.33C6.25305 17.0921 5.73822 16.7946 5.26099 16.443L3.42399 17.028C2.976 17.1709 2.48898 16.9823 2.25399 16.575L0.429995 13.424C0.197583 13.0165 0.277653 12.5025 0.622995 12.185L2.04799 10.885C1.98319 10.2961 1.98319 9.70189 2.04799 9.113L0.622995 7.816C0.277145 7.49837 0.197042 6.98372 0.429995 6.576L2.24999 3.423C2.48498 3.0157 2.972 2.82714 3.41999 2.97L5.25699 3.555C5.50106 3.37416 5.75513 3.20722 6.01799 3.055C6.27033 2.91269 6.53003 2.78385 6.79599 2.669L7.20399 0.787C7.30406 0.327969 7.71018 0.000494393 8.18 0H11.82C12.2898 0.000494393 12.6959 0.327969 12.796 0.787L13.208 2.67C13.4888 2.79352 13.7622 2.93308 14.027 3.088C14.2739 3.23081 14.5126 3.38739 14.742 3.557L16.58 2.972C17.0277 2.82967 17.5141 3.01816 17.749 3.425L19.569 6.578C19.8014 6.98548 19.7213 7.49951 19.376 7.817L17.951 9.117C18.0158 9.70589 18.0158 10.3001 17.951 10.889L19.376 12.189C19.7213 12.5065 19.8014 13.0205 19.569 13.428L17.749 16.581C17.5141 16.9878 17.0277 17.1763 16.58 17.034L14.742 16.449C14.5094 16.6203 14.2677 16.7789 14.018 16.924C13.7558 17.0759 13.4854 17.2131 13.208 17.335L12.796 19.214C12.6955 19.6726 12.2895 19.9996 11.82 20ZM5.61999 14.229L6.43999 14.829C6.62485 14.9652 6.81751 15.0904 7.01699 15.204C7.2047 15.3127 7.39796 15.4115 7.59599 15.5L8.52899 15.909L8.98599 18H11.016L11.473 15.908L12.406 15.499C12.8133 15.3194 13.1999 15.0961 13.559 14.833L14.38 14.233L16.421 14.883L17.436 13.125L15.853 11.682L15.965 10.67C16.0142 10.2274 16.0142 9.78064 15.965 9.338L15.853 8.326L17.437 6.88L16.421 5.121L14.38 5.771L13.559 5.171C13.1998 4.90671 12.8132 4.68175 12.406 4.5L11.473 4.091L11.016 2H8.98599L8.52699 4.092L7.59599 4.5C7.3978 4.58704 7.20451 4.68486 7.01699 4.793C6.81873 4.90633 6.62709 5.03086 6.44299 5.166L5.62199 5.766L3.58199 5.116L2.56499 6.88L4.14799 8.321L4.036 9.334C3.9868 9.77664 3.9868 10.2234 4.036 10.666L4.14799 11.678L2.56499 13.121L3.57999 14.879L5.61999 14.229ZM9.99599 14C7.78686 14 5.99599 12.2091 5.99599 10C5.99599 7.79086 7.78686 6 9.99599 6C12.2051 6 13.996 7.79086 13.996 10C13.9932 12.208 12.204 13.9972 9.99599 14ZM9.99599 8C8.90339 8.00111 8.01388 8.87885 7.99823 9.97134C7.98257 11.0638 8.84656 11.9667 9.93868 11.9991C11.0308 12.0315 11.9468 11.1815 11.996 10.09V10.49V10C11.996 8.89543 11.1006 8 9.99599 8Z"/>
    </svg>
    </div>
  );
};

const Home = (props) => {
  return (
    <div id={props.id} className={cn(props.size, "home", "ui-icon")}>
    <svg className={props.face} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={props.face} d="M17 19H3C2.44772 19 2 18.5523 2 18V10H0L9.292 0.707013C9.47957 0.519236 9.73409 0.413727 9.9995 0.413727C10.2649 0.413727 10.5194 0.519236 10.707 0.707013L20 10H18V18C18 18.5523 17.5523 19 17 19ZM8 12H12V17H16V8.82801L10 2.82801L4 8.82801V17H8V12Z"/>
    </svg>
    </div>
  );
};


const iconList = {
  menu: Menu,
  livingRoom: LivingRoom,
  kitchen: Kitchen,
  bedroom: Bedroom,
  bathroom: Bathroom,
  thermostat: Thermostat,
  leaves: Leaves,
  humidity: Humidity,
  silent: Silent,
  coolAir: CoolAir,
  settings: Settings,
  barChart: BarChart,
  bulb: Bulb,
  settingGear: SettingGear,
  home: Home,
};
/**
 * This is the Icon component to genarate all icons to export and use internal components as well.
 */

 let iconNameList =
 ['menu',
 'livingRoom',
 'kitchen',
 'bedroom',
 'bathroom',
 'thermostat',
 'leaves',
 'humidity',
 'silent',
 'coolAir',
 'settings',
 'barChart',
 'bulb',
 'settingGear',
 'home',
 ];
export const Icon = ({ name, size, face, hintText, ...props }) => {
  let type;
  if(iconNameList.indexOf(name) !== -1)
  {
    type = name;
  }
  else
  {
    type ='menu';
  }
  const GenerateIcon = iconList[type];
  let iconDefaults = Object.assign({}, props, {
    size: size || 'small',
    face: face || 'fill-blue',
    hintText: hintText || ''
  });
  return (
    <GenerateIcon {...iconDefaults} > </GenerateIcon>
  );
};

Icon.propTypes = {
  /**
  * What icon to use
  */
  name: PropTypes.oneOf(iconNameList),
  /**
  * Size of he icon Ex: small :11px, xx small: 16px, x small: 24px, small: 32px, medium: 40px, large:48px, x large: 64px, xx large: 128px
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
  * Styling of the Icon. Icons can have Filled or stroke style with different colours.
  */

  face: PropTypes.oneOf(['fill-white','fill-gray', 'fill-blue', 'fill-black']),

  /**
  * What text should be show on mouse hover
  */
  hintText: PropTypes.string,
};

Icon.defaultProps = {
  name: 'menu',
  size: 'medium',
  face: 'fill-blue',
  hintText: '',
};

