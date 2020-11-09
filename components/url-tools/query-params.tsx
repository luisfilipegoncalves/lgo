import { Table, TableBody, TableCell, TableHeader, TableRow } from "grommet";

export interface QueryParam {
  key: string;
  value: string;
}

interface QueryParamsProps {
  params: QueryParam[];
}

const QueryParams = (props: QueryParamsProps) => {
  const { params } = props;
  if (params.length === 0) return <></>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Param
          </TableCell>
          <TableCell scope="col" border="bottom">
            Value
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {params.map((query, index) => (
          <TableRow key={index}>
            <TableCell scope="row">
              <strong>{query.key}</strong>
            </TableCell>
            <TableCell>{query.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default QueryParams;
