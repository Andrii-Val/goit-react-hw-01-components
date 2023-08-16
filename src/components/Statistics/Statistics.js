import {ListItem , List, StatisticsSection} from './Statistics.styled'

export const Statistics = ({datas})=>{
    return(
        <StatisticsSection className="statistics">
  <h2 className="title">Upload stats</h2>
         <List className="stat-list">
        {datas.map(data=> 
        <ListItem key={data.id } className="item">
            <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
        </ListItem>
        
        )
        }
        
    
    </List>
    </StatisticsSection>
   );
    
};