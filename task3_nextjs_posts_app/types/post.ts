export type Post = {
    id: number;
    title: string;
    body: string;
};

export type Params = Promise<{ id: string }>;

export type PostPageProps = {
    params: Params;
};
