export const cacheDeleter = (key: string) => (cache: any) => {
    // Loop through all the data in our cache
    // And delete any items that start with "ListItem"
    // This empties the cache of all of our list items and
    // forces a refetch of the data.

    var replace = "^" + key;
    var regex = new RegExp(replace, "g");

    console.log({ cache });

    Object.keys(cache.data.data).forEach(
        (key) => key.match(regex) && cache.data.delete(key)
    );
};
