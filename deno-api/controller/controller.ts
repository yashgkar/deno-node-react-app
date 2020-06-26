import mongo from "../db/mongo.ts";

//@desc Get all tasks
//@route Get /

const getTasks = async ({ response }: { response: any }) => {
  const Todos = await mongo.find();

  response.json(Todos);
};

//@desc Get single task
//@route Get /:id

const getTask= async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const task = await mongo.findOne({ _id: { $oid: params.id } });

  if (task) {
    response.json(task);
  } else {
    response.json({
      success: false,
      data: "No product found for given ID",
    });
  }
};

//@desc Adds a task
//@route POST /add

const addTask = async ({
  response,
  request,
}: {
  response: any;
  request: any;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      data: "No data provided",
    };
  } else {
    const task = body.value;
    await mongo.insertOne({
      task,
    });
    response.status = 201;
    response.body = {
      success: true,
      data: "Task added to pizzas database",
    };
  }
};

//@desc updates a task
//@route POST /update/:id

const updateTask = async ({
  params,
  response,
  request,
}: {
  params: { id: string };
  response: any;
  request: any;
}) => {
  const body = await request.body();
  const task = await mongo.updateOne(
    { _id: { $oid: params.id } },
    {
      $set: {
        product: {
          pizza: body.value.pizzas,
          price: body.value.price,
        },
      },
    }
  );

  if (task.modifiedCount === 1) {
    response.body = {
      success: true,
      data: "Updated task!",
    };
  } else {
    response.body = {
      success: false,
      data: "No product found for given ID",
    };
  }
};


export { getTasks, getTask, addTask, updateTask };
