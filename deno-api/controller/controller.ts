import mong from "../db/mongo.ts";

//@desc Get all tasks
//@route Get /

const getTasks = async ({ response }: { response: any }) => {
  const Todos = await mong.find();

  response.body = Todos;
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
  const task = await mong.findOne({ _id: { $oid: params.id } });

  if (task) {
    response.json({task});
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
    
    await mong.insertOne({
      todo_description: body.value.todo_description,
      todo_responsible: body.value.todo_responsible,
      todo_priority: body.value.todo_priority
    });
    response.status = 201;
    response.json({ todo: "todo added successfully" });
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
  const task = await mong.updateOne(
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
