import { useState, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { X, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PricePoint {
  date: string;
  price: number;
}

interface PriceChartModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  currentPrice: string;
  trend: string;
  trendUp: boolean;
  basePrice: number; // Raw price number for generation
  color: string;
}

const PriceChartModal = ({ 
  show, 
  onHide, 
  title, 
  currentPrice, 
  trend, 
  trendUp, 
  basePrice,
  color 
}: PriceChartModalProps) => {
  const [activeRange, setActiveRange] = useState('1W');

  // Generate data based on active range
  const data = useMemo(() => {
    if (!basePrice) return [];
    
    const points: PricePoint[] = [];
    const now = new Date();
    let count = 7;
    let volatility = 0.05; // 5% default
    let trendFactorBase = trendUp ? 1 : -1;
    let labelFormat: 'time' | 'date' | 'month' = 'date';

    switch(activeRange) {
      case '1H':
        count = 12; // Every 5 mins
        volatility = 0.005; // Low volatility
        labelFormat = 'time';
        break;
      case '1D':
        count = 24; // Every hour
        volatility = 0.02;
        labelFormat = 'time';
        break;
      case '1W':
        count = 7;
        volatility = 0.05;
        labelFormat = 'date';
        break;
      case '1M':
        count = 30;
        volatility = 0.08;
        labelFormat = 'date';
        break;
      case '1Y':
        count = 12; // Months
        volatility = 0.15;
        labelFormat = 'month';
        break;
      case 'ALL':
        count = 50;
        volatility = 0.30;
        labelFormat = 'month';
        break;
    }

    for (let i = count - 1; i >= 0; i--) {
      const date = new Date(now);
      
      if (activeRange === '1H') date.setMinutes(date.getMinutes() - i * 5);
      else if (activeRange === '1D') date.setHours(date.getHours() - i);
      else if (activeRange === '1Y' || activeRange === 'ALL') date.setMonth(date.getMonth() - i);
      else date.setDate(date.getDate() - i);

      let label = '';
      if (labelFormat === 'time') label = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      else if (labelFormat === 'month') label = date.toLocaleDateString('en-US', { month: 'short' });
      else label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

      // Random walk with trend
      const randomVar = (Math.random() - 0.5) * (basePrice * volatility);
      const trendComponent = (trendFactorBase * (basePrice * 0.01)) * (1 - i/count);
      
      points.push({
        date: label,
        price: basePrice - trendComponent + randomVar
      });
    }
    // Ensure last point matches approximate current price (with slight noise required naturally)
    // But forcing exact basePrice might look weird if volatility is high, let's just make it close.
    points[points.length - 1].price = basePrice;
    
    return points;
  }, [basePrice, activeRange, trendUp]);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-3 shadow-lg border-0" style={{ minWidth: '140px' }}>
          <p className="mb-1 text-muted text-uppercase" style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em' }}>{label}</p>
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: color }}></div>
            <p className="mb-0 fw-bold fs-5" style={{ color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              ${payload[0].value.toFixed(2)}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  // Sanitize title for valid SVG ID
  const chartId = title.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="fade">
      <Modal.Body className="p-0 overflow-hidden rounded-4">
        <div className="p-4 bg-white">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h5 className="text-muted text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>{title}</h5>
              <div className="d-flex align-items-baseline gap-3">
                <h2 className="mb-0 fw-bold" style={{ letterSpacing: '-0.02em' }}>{currentPrice}</h2>
                <div className={`d-flex align-items-center gap-1 ${trendUp ? 'text-success' : 'text-danger'} fw-medium`}>
                  {trendUp ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                  <span>{trend}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onHide}
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center hover-bg-light-darker transition-all"
              style={{ width: '36px', height: '36px' }}
            >
              <X size={20} className="text-muted" />
            </button>
          </div>

          <div style={{ height: '350px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id={`gradient-${chartId}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.25}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={true} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 500 }}
                  dy={10}
                />
                <YAxis 
                  domain={['dataMin - 10', 'dataMax + 10']}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 500 }}
                  tickFormatter={(value) => `$${Math.round(value)}`}
                  dx={10}
                />
                <Tooltip 
                  content={<CustomTooltip />} 
                  cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '4 4' }} 
                  isAnimationActive={false}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke={color} 
                  strokeWidth={2.5}
                  fillOpacity={1} 
                  fill={`url(#gradient-${chartId})`} 
                  activeDot={{ r: 6, stroke: '#fff', strokeWidth: 4, fill: color }}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="d-flex justify-content-center gap-2 mt-4 bg-light p-1 rounded-pill d-inline-flex mx-auto position-relative start-50 translate-middle-x">
            {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((range) => (
              <button 
                key={range}
                onClick={() => setActiveRange(range)}
                className={`btn btn-sm rounded-pill px-3 transition-all border-0 ${activeRange === range ? 'text-white shadow-sm' : 'text-muted hover-bg-white'}`}
                style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.02em', 
                  minWidth: '50px',
                  backgroundColor: activeRange === range ? '#475569' : 'transparent' // Slate 600
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PriceChartModal;
