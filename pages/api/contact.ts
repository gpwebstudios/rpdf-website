export default (req: { body: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }) => {
    const body = JSON.parse(req.body);
    console.log(body);
    res.status(200).json({ status: 'OK' });
};