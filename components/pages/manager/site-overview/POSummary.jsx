import { ArrowNarrowDown, ArrowNarrowUp, Site } from '../../../icons'

const SummarySection = () => {
  return (
    <div
      className="row col-md-12 bg-neutral-100"
      style={{
        boxShadow: '0px 4px 14px rgba(243, 245, 250, 0.92)',
        borderRadius: '0px 0px 0px 44px',
        padding: '0 25px 20px 0',
      }}
    >
      <div className="col-md-2 p-3" style={{ height: '100%' }}>
        <div className="d--f jc--c">
          <Site width="89" />
        </div>
        <div className="d--f jc--c" style={{ marginTop: '18px' }}>
          <select className="select fw-bold fs-400">
            <option value="0">Princeton Plain</option>
          </select>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="bg-accent-110"
          style={{ borderRadius: '12px', padding: '20px 20px 14px 20px' }}
        >
          <div
            className="fs-600 fw-bold text-primary-280"
            style={{ lineHeight: '20px', marginBottom: '6px' }}
          >
            Top 3 positioning issues
          </div>
          <div
            className="fw-semi-bold fs-400 text-primary-250"
            style={{ lineHeight: '20px' }}
          >
            Here you can see top 3 most frequent positioning issues present in
            the images.
          </div>
          <div style={{ paddingTop: 'var(--size-200)' }} className="d--f ai--b">
            <span className="fs-400 text-accent-120">Calculated on:</span>
            &nbsp;
            <span className="fs-400 text-accent-500">10251 images</span>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div
          className="ml-3 bg-neutral-100 br--solid--light"
          style={{ borderRadius: '12px', padding: '16px 16px 12px 16px' }}
        >
          <div
            className="fw-bold fs-400 text-primary-250"
            sx={{ lineHeight: '16px' }}
          >
            PNL diff {'>'} 1cm
          </div>
          <div
            className="fw-extra-bold fs-850 text-accent-500"
            style={{ lineHeight: '48px', marginTop: '4px' }}
          >
            42%
          </div>
          <div className="d--f ai--c" style={{ marginTop: '8px' }}>
            <span
              className="fs-300 d--if ai--c br--1"
              style={{
                lineHeight: '16px',
                color: '#FF5B51',
                backgroundColor: '#FFEAE9',
                padding: '2px 7.5px',
                marginRight: '8px',
                columnGap: '2px',
              }}
            >
              <ArrowNarrowUp size="12" stroke="#FF5B51" /> +5%
            </span>
            <span className="fs-300 text-accent-120">since last month</span>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div
          className="ml-3 bg-neutral-100 br--solid--light"
          style={{ borderRadius: '12px', padding: '16px 16px 12px 16px' }}
        >
          <div
            className="fw-bold fs-400 text-primary-250"
            sx={{ lineHeight: '16px' }}
          >
            Pec does not reach PNL
          </div>
          <div
            className="fw-extra-bold fs-850 text-accent-500"
            style={{ lineHeight: '48px', marginTop: '4px' }}
          >
            27%
          </div>
          <div className="d--f ai--c" style={{ marginTop: '8px' }}>
            <span
              className="fs-300 d--if ai--c br--1"
              style={{
                lineHeight: '16px',
                color: '#00AD5A',
                backgroundColor: '#C8F5E0',
                padding: '2px 7.5px',
                marginRight: '8px',
                columnGap: '2px',
              }}
            >
              <ArrowNarrowDown size="12" stroke="#00AD5A" /> -8%
            </span>
            <span className="fs-300 text-accent-120">since last month</span>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div
          className="ml-3 bg-neutral-100 br--solid--light"
          style={{ borderRadius: '12px', padding: '16px 16px 12px 16px' }}
        >
          <div
            className="fw-bold fs-400 text-primary-250"
            sx={{ lineHeight: '16px' }}
          >
            Nipple not in profile
          </div>
          <div
            className="fw-extra-bold fs-850 text-accent-500"
            style={{ lineHeight: '48px', marginTop: '4px' }}
          >
            12%
          </div>
          <div className="d--f ai--c" style={{ marginTop: '8px' }}>
            <span
              className="fs-300 d--if ai--c br--1"
              style={{
                lineHeight: '16px',
                color: '#FF5B51',
                backgroundColor: '#FFEAE9',
                padding: '2px 7.5px',
                marginRight: '8px',
                columnGap: '2px',
              }}
            >
              <ArrowNarrowUp size="12" stroke="#FF5B51" /> +3%
            </span>
            <span className="fs-300 text-accent-120">since last month</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummarySection
