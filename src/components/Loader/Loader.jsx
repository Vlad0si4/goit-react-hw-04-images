import { Oval } from 'react-loader-spinner';
import { StyletLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyletLoader>
      <Oval
        height={120}
        width={120}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyletLoader>
  );
};
