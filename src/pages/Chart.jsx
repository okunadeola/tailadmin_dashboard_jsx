import Breadcrumb from '../components/Breadcrumb.jsx';
import ChartFour from '../components/ChartFour.jsx';
import ChartOne from '../components/ChartOne.jsx';
import ChartThree from '../components/ChartThree.jsx';
import ChartTwo from '../components/ChartTwo.jsx';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
