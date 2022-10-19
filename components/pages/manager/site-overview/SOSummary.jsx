import TopPart from '@components/common/TopPart/TopPart'

// mock data for cards, to be received from API endpoint
const cards = [
  {
    id: 0,
    title: 'PNL diff > 1cm',
    amount: '42%',
    variance: '+5%',
    increased: true,
    success: false,
  },
  {
    id: 1,
    title: 'Pec does not reach PNL',
    amount: '27%',
    variance: '-8%',
    increased: false,
    success: true,
  },
  {
    id: 2,
    title: 'Nippple not in profile',
    amount: '12%',
    variance: '+3%',
    increased: true,
    success: false,
  },
]

const Summary = () => {
  return <TopPart summarySite cards={cards} />
}

export default Summary
