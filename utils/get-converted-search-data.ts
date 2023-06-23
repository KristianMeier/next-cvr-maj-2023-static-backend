interface getConvertedSearchDataProps {
  cvrNumber: string
  companyName: string
  address: string
  status: string
  companyType: string
  postNoCity: string
}

export const getConvertedSearchData = ({
  cvrNumber,
  companyName,
  address,
  status,
  companyType,
  postNoCity,
}: getConvertedSearchDataProps) => {
  return [
    { title: companyName, paragraphOne: address, paragraphTwo: postNoCity },
    {
      title: 'get.converted.search.data.cvr',
      paragraphOne: cvrNumber,
      paragraphTwo: '',
    },
    {
      title: 'get.converted.search.data.status',
      paragraphOne: status,
      paragraphTwo: '',
    },
    {
      title: 'get.converted.search.data.companytype',
      paragraphOne: companyType,
      paragraphTwo: '',
    },
  ]
}
